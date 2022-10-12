import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsWhereUniqueInput } from '../move-flags/move-flags-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveFlagsArgs {

    @Field(() => move_flagsWhereUniqueInput, {nullable:false})
    @Type(() => move_flagsWhereUniqueInput)
    where!: move_flagsWhereUniqueInput;
}
