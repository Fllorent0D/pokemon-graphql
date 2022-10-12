import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_damage_class_proseMove_damage_class_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    move_damage_class_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
