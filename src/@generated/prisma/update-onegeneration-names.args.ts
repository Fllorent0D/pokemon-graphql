import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesUpdateInput } from '../generation-names/generation-names-update.input';
import { Type } from 'class-transformer';
import { generation_namesWhereUniqueInput } from '../generation-names/generation-names-where-unique.input';

@ArgsType()
export class UpdateOnegenerationNamesArgs {

    @Field(() => generation_namesUpdateInput, {nullable:false})
    @Type(() => generation_namesUpdateInput)
    data!: generation_namesUpdateInput;

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;
}
