import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { locations } from '../locations/locations.model';

@ObjectType()
export class location_names {

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => locations, {nullable:false})
    locations?: locations;
}
