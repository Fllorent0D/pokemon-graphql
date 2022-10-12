import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_damage_class_proseInput } from './languages-create-without-move-damage-class-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_damage_class_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_damage_class_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_damage_class_proseInput)
    create!: languagesCreateWithoutMove_damage_class_proseInput;
}
