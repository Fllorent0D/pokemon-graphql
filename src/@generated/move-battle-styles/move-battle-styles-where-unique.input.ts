import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_battle_stylesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
