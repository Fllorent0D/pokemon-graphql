import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutMove_damage_classesInput } from './types-create-without-move-damage-classes.input';

@InputType()
export class typesCreateOrConnectWithoutMove_damage_classesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => typesCreateWithoutMove_damage_classesInput)
    create!: typesCreateWithoutMove_damage_classesInput;
}
