import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_flag_mapUncheckedCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;
}
