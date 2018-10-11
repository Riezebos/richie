# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-10-08 20:32
from __future__ import unicode_literals

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cms", "0020_old_tree_cleanup"),
        ("courses", "0005_auto_20180830_1217"),
    ]

    operations = [
        migrations.CreateModel(
            name="SubjectPluginModel",
            fields=[
                (
                    "cmsplugin_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        related_name="courses_subjectpluginmodel",
                        serialize=False,
                        to="cms.CMSPlugin",
                    ),
                ),
                (
                    "page",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="cms.Page"
                    ),
                ),
            ],
            options={"verbose_name": "subject plugin model"},
            bases=("cms.cmsplugin",),
        )
    ]
