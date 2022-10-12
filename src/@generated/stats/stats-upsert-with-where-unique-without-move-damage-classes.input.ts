import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsUpdateWithoutMove_damage_classesInput } from './stats-update-without-move-damage-classes.input';
import { statsCreateWithoutMove_damage_classesInput } from './stats-create-without-move-damage-classes.input';

@InputType()
export class statsUpsertWithWhereUniqueWithoutMove_damage_classesInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsUpdateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => statsUpdateWithoutMove_damage_classesInput)
    update!: statsUpdateWithoutMove_damage_classesInput;

    @Field(() => statsCreateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => statsCreateWithoutMove_damage_classesInput)
    create!: statsCreateWithoutMove_damage_classesInput;
}
