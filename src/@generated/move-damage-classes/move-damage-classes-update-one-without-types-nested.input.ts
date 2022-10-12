import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateOrConnectWithoutTypesInput } from './move-damage-classes-create-or-connect-without-types.input';
import { move_damage_classesUpsertWithoutTypesInput } from './move-damage-classes-upsert-without-types.input';
import { move_damage_classesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { move_damage_classesUpdateWithoutTypesInput } from './move-damage-classes-update-without-types.input';

@InputType()
export class move_damage_classesUpdateOneWithoutTypesNestedInput {

    @Field(() => move_damage_classesCreateWithoutTypesInput, {nullable:true})
    @Type(() => move_damage_classesCreateWithoutTypesInput)
    create?: move_damage_classesCreateWithoutTypesInput;

    @Field(() => move_damage_classesCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => move_damage_classesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: move_damage_classesCreateOrConnectWithoutTypesInput;

    @Field(() => move_damage_classesUpsertWithoutTypesInput, {nullable:true})
    @Type(() => move_damage_classesUpsertWithoutTypesInput)
    upsert?: move_damage_classesUpsertWithoutTypesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:true})
    @Type(() => move_damage_classesWhereUniqueInput)
    connect?: move_damage_classesWhereUniqueInput;

    @Field(() => move_damage_classesUpdateWithoutTypesInput, {nullable:true})
    @Type(() => move_damage_classesUpdateWithoutTypesInput)
    update?: move_damage_classesUpdateWithoutTypesInput;
}
