import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateOrConnectWithoutMovesInput } from './move-damage-classes-create-or-connect-without-moves.input';
import { move_damage_classesUpsertWithoutMovesInput } from './move-damage-classes-upsert-without-moves.input';
import { move_damage_classesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { move_damage_classesUpdateWithoutMovesInput } from './move-damage-classes-update-without-moves.input';

@InputType()
export class move_damage_classesUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => move_damage_classesCreateWithoutMovesInput, {nullable:true})
    @Type(() => move_damage_classesCreateWithoutMovesInput)
    create?: move_damage_classesCreateWithoutMovesInput;

    @Field(() => move_damage_classesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => move_damage_classesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: move_damage_classesCreateOrConnectWithoutMovesInput;

    @Field(() => move_damage_classesUpsertWithoutMovesInput, {nullable:true})
    @Type(() => move_damage_classesUpsertWithoutMovesInput)
    upsert?: move_damage_classesUpsertWithoutMovesInput;

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:true})
    @Type(() => move_damage_classesWhereUniqueInput)
    connect?: move_damage_classesWhereUniqueInput;

    @Field(() => move_damage_classesUpdateWithoutMovesInput, {nullable:true})
    @Type(() => move_damage_classesUpdateWithoutMovesInput)
    update?: move_damage_classesUpdateWithoutMovesInput;
}
