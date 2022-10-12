import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesCreateInput } from '../move-names/move-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveNamesArgs {

    @Field(() => move_namesCreateInput, {nullable:false})
    @Type(() => move_namesCreateInput)
    data!: move_namesCreateInput;
}
