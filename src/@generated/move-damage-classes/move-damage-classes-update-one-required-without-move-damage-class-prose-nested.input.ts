import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateWithoutMove_damage_class_proseInput } from './move-damage-classes-create-without-move-damage-class-prose.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateOrConnectWithoutMove_damage_class_proseInput } from './move-damage-classes-create-or-connect-without-move-damage-class-prose.input';
import { move_damage_classesUpsertWithoutMove_damage_class_proseInput } from './move-damage-classes-upsert-without-move-damage-class-prose.input';
import { move_damage_classesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { move_damage_classesUpdateWithoutMove_damage_class_proseInput } from './move-damage-classes-update-without-move-damage-class-prose.input';

@InputType()
export class move_damage_classesUpdateOneRequiredWithoutMove_damage_class_proseNestedInput {

    @Field(() => move_damage_classesCreateWithoutMove_damage_class_proseInput, {nullable:true})
    @Type(() => move_damage_classesCreateWithoutMove_damage_class_proseInput)
    create?: move_damage_classesCreateWithoutMove_damage_class_proseInput;

    @Field(() => move_damage_classesCreateOrConnectWithoutMove_damage_class_proseInput, {nullable:true})
    @Type(() => move_damage_classesCreateOrConnectWithoutMove_damage_class_proseInput)
    connectOrCreate?: move_damage_classesCreateOrConnectWithoutMove_damage_class_proseInput;

    @Field(() => move_damage_classesUpsertWithoutMove_damage_class_proseInput, {nullable:true})
    @Type(() => move_damage_classesUpsertWithoutMove_damage_class_proseInput)
    upsert?: move_damage_classesUpsertWithoutMove_damage_class_proseInput;

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:true})
    @Type(() => move_damage_classesWhereUniqueInput)
    connect?: move_damage_classesWhereUniqueInput;

    @Field(() => move_damage_classesUpdateWithoutMove_damage_class_proseInput, {nullable:true})
    @Type(() => move_damage_classesUpdateWithoutMove_damage_class_proseInput)
    update?: move_damage_classesUpdateWithoutMove_damage_class_proseInput;
}
