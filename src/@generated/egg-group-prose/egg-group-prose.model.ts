import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { egg_groups } from '../egg-groups/egg-groups.model';

@ObjectType()
export class egg_group_prose {

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => egg_groups, {nullable:false})
    egg_groups?: egg_groups;
}
