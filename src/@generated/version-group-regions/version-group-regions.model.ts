import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { regions } from '../regions/regions.model';
import { version_groups } from '../version-groups/version-groups.model';

@ObjectType()
export class version_group_regions {

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    region_id!: number;

    @Field(() => regions, {nullable:false})
    regions?: regions;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;
}
