import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateOrConnectWithoutTypesInput } from './move-damage-classes-create-or-connect-without-types.input';
import { move_damage_classesWhereUniqueInput } from './move-damage-classes-where-unique.input';

@InputType()
export class move_damage_classesCreateNestedOneWithoutTypesInput {

    @Field(() => move_damage_classesCreateWithoutTypesInput, {nullable:true})
    @Type(() => move_damage_classesCreateWithoutTypesInput)
    create?: move_damage_classesCreateWithoutTypesInput;

    @Field(() => move_damage_classesCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => move_damage_classesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: move_damage_classesCreateOrConnectWithoutTypesInput;

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:true})
    @Type(() => move_damage_classesWhereUniqueInput)
    connect?: move_damage_classesWhereUniqueInput;
}
