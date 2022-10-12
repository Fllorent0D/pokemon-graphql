import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesCreateInput } from './berries-create.input';
import { berriesUpdateInput } from './berries-update.input';

@ArgsType()
export class UpsertOneberriesArgs {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesCreateInput, {nullable:false})
    @Type(() => berriesCreateInput)
    create!: berriesCreateInput;

    @Field(() => berriesUpdateInput, {nullable:false})
    @Type(() => berriesUpdateInput)
    update!: berriesUpdateInput;
}
