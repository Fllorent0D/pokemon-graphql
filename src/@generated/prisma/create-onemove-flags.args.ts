import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsCreateInput } from '../move-flags/move-flags-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveFlagsArgs {

    @Field(() => move_flagsCreateInput, {nullable:false})
    @Type(() => move_flagsCreateInput)
    data!: move_flagsCreateInput;
}
