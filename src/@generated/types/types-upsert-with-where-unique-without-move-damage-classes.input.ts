import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesUpdateWithoutMove_damage_classesInput } from './types-update-without-move-damage-classes.input';
import { typesCreateWithoutMove_damage_classesInput } from './types-create-without-move-damage-classes.input';

@InputType()
export class typesUpsertWithWhereUniqueWithoutMove_damage_classesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => typesUpdateWithoutMove_damage_classesInput)
    update!: typesUpdateWithoutMove_damage_classesInput;

    @Field(() => typesCreateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => typesCreateWithoutMove_damage_classesInput)
    create!: typesCreateWithoutMove_damage_classesInput;
}
