import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsWhereInput } from '../move-flags/move-flags-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveFlagsArgs {

    @Field(() => move_flagsWhereInput, {nullable:true})
    @Type(() => move_flagsWhereInput)
    where?: move_flagsWhereInput;
}
