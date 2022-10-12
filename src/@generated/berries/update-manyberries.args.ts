import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berriesUpdateManyMutationInput } from './berries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { berriesWhereInput } from './berries-where.input';

@ArgsType()
export class UpdateManyberriesArgs {

    @Field(() => berriesUpdateManyMutationInput, {nullable:false})
    @Type(() => berriesUpdateManyMutationInput)
    data!: berriesUpdateManyMutationInput;

    @Field(() => berriesWhereInput, {nullable:true})
    @Type(() => berriesWhereInput)
    where?: berriesWhereInput;
}
