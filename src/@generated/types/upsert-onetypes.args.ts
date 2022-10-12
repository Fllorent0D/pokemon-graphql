import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateInput } from './types-create.input';
import { typesUpdateInput } from './types-update.input';

@ArgsType()
export class UpsertOnetypesArgs {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateInput, {nullable:false})
    @Type(() => typesCreateInput)
    create!: typesCreateInput;

    @Field(() => typesUpdateInput, {nullable:false})
    @Type(() => typesUpdateInput)
    update!: typesUpdateInput;
}
