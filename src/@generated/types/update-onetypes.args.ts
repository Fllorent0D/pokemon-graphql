import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { typesUpdateInput } from './types-update.input';
import { Type } from 'class-transformer';
import { typesWhereUniqueInput } from './types-where-unique.input';

@ArgsType()
export class UpdateOnetypesArgs {

    @Field(() => typesUpdateInput, {nullable:false})
    @Type(() => typesUpdateInput)
    data!: typesUpdateInput;

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;
}
