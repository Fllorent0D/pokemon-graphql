import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsWhereUniqueInput } from '../move-flags/move-flags-where-unique.input';
import { Type } from 'class-transformer';
import { move_flagsCreateInput } from '../move-flags/move-flags-create.input';
import { move_flagsUpdateInput } from '../move-flags/move-flags-update.input';

@ArgsType()
export class UpsertOnemoveFlagsArgs {

    @Field(() => move_flagsWhereUniqueInput, {nullable:false})
    @Type(() => move_flagsWhereUniqueInput)
    where!: move_flagsWhereUniqueInput;

    @Field(() => move_flagsCreateInput, {nullable:false})
    @Type(() => move_flagsCreateInput)
    create!: move_flagsCreateInput;

    @Field(() => move_flagsUpdateInput, {nullable:false})
    @Type(() => move_flagsUpdateInput)
    update!: move_flagsUpdateInput;
}
