import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { berry_firmness } from '../berry-firmness/berry-firmness.model';

@ObjectType()
export class berry_firmness_names {

    @Field(() => Int, {nullable:false})
    berry_firmness_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => berry_firmness, {nullable:false})
    berry_firmness?: berry_firmness;
}
