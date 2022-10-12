import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsUpdateManyMutationInput } from './regions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { regionsWhereInput } from './regions-where.input';

@ArgsType()
export class UpdateManyregionsArgs {

    @Field(() => regionsUpdateManyMutationInput, {nullable:false})
    @Type(() => regionsUpdateManyMutationInput)
    data!: regionsUpdateManyMutationInput;

    @Field(() => regionsWhereInput, {nullable:true})
    @Type(() => regionsWhereInput)
    where?: regionsWhereInput;
}
