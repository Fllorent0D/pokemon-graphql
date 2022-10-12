import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesWhereUniqueInput } from '../contest-types/contest-types-where-unique.input';
import { Type } from 'class-transformer';
import { contest_typesCreateInput } from '../contest-types/contest-types-create.input';
import { contest_typesUpdateInput } from '../contest-types/contest-types-update.input';

@ArgsType()
export class UpsertOnecontestTypesArgs {

    @Field(() => contest_typesWhereUniqueInput, {nullable:false})
    @Type(() => contest_typesWhereUniqueInput)
    where!: contest_typesWhereUniqueInput;

    @Field(() => contest_typesCreateInput, {nullable:false})
    @Type(() => contest_typesCreateInput)
    create!: contest_typesCreateInput;

    @Field(() => contest_typesUpdateInput, {nullable:false})
    @Type(() => contest_typesUpdateInput)
    update!: contest_typesUpdateInput;
}
