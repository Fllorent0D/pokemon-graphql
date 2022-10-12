import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsWhereInput } from '../move-flags/move-flags-where.input';

@InputType()
export class Move_flagsRelationFilter {

    @Field(() => move_flagsWhereInput, {nullable:true})
    is?: move_flagsWhereInput;

    @Field(() => move_flagsWhereInput, {nullable:true})
    isNot?: move_flagsWhereInput;
}
