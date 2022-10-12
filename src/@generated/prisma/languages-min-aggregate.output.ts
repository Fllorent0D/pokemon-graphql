import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LanguagesMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    iso639?: string;

    @Field(() => String, {nullable:true})
    iso3166?: string;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Boolean, {nullable:true})
    official?: boolean;

    @Field(() => Int, {nullable:true})
    order?: number;
}
