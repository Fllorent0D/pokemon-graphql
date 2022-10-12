import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';

@InputType()
export class move_damage_classesCreateOrConnectWithoutMovesInput {

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_classesWhereUniqueInput)
    where!: move_damage_classesWhereUniqueInput;

    @Field(() => move_damage_classesCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_damage_classesCreateWithoutMovesInput)
    create!: move_damage_classesCreateWithoutMovesInput;
}
