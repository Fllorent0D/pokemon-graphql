import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesWhereUniqueInput } from '../contest-type-names/contest-type-names-where-unique.input';
import { Type } from 'class-transformer';
import { contest_type_namesCreateInput } from '../contest-type-names/contest-type-names-create.input';
import { contest_type_namesUpdateInput } from '../contest-type-names/contest-type-names-update.input';

@ArgsType()
export class UpsertOnecontestTypeNamesArgs {

    @Field(() => contest_type_namesWhereUniqueInput, {nullable:false})
    @Type(() => contest_type_namesWhereUniqueInput)
    where!: contest_type_namesWhereUniqueInput;

    @Field(() => contest_type_namesCreateInput, {nullable:false})
    @Type(() => contest_type_namesCreateInput)
    create!: contest_type_namesCreateInput;

    @Field(() => contest_type_namesUpdateInput, {nullable:false})
    @Type(() => contest_type_namesUpdateInput)
    update!: contest_type_namesUpdateInput;
}
