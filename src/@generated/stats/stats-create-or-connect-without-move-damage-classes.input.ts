import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutMove_damage_classesInput } from './stats-create-without-move-damage-classes.input';

@InputType()
export class statsCreateOrConnectWithoutMove_damage_classesInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsCreateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => statsCreateWithoutMove_damage_classesInput)
    create!: statsCreateWithoutMove_damage_classesInput;
}
