import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_damage_class_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    move_damage_class_id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}