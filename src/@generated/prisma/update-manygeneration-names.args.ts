import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesUpdateManyMutationInput } from '../generation-names/generation-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { generation_namesWhereInput } from '../generation-names/generation-names-where.input';

@ArgsType()
export class UpdateManygenerationNamesArgs {

    @Field(() => generation_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => generation_namesUpdateManyMutationInput)
    data!: generation_namesUpdateManyMutationInput;

    @Field(() => generation_namesWhereInput, {nullable:true})
    @Type(() => generation_namesWhereInput)
    where?: generation_namesWhereInput;
}
