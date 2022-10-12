import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsUpdateInput } from '../move-flags/move-flags-update.input';
import { Type } from 'class-transformer';
import { move_flagsWhereUniqueInput } from '../move-flags/move-flags-where-unique.input';

@ArgsType()
export class UpdateOnemoveFlagsArgs {

    @Field(() => move_flagsUpdateInput, {nullable:false})
    @Type(() => move_flagsUpdateInput)
    data!: move_flagsUpdateInput;

    @Field(() => move_flagsWhereUniqueInput, {nullable:false})
    @Type(() => move_flagsWhereUniqueInput)
    where!: move_flagsWhereUniqueInput;
}
