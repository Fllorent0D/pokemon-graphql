import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_damage_class_proseInput } from './languages-update-without-move-damage-class-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_damage_class_proseInput } from './languages-create-without-move-damage-class-prose.input';

@InputType()
export class languagesUpsertWithoutMove_damage_class_proseInput {

    @Field(() => languagesUpdateWithoutMove_damage_class_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_damage_class_proseInput)
    update!: languagesUpdateWithoutMove_damage_class_proseInput;

    @Field(() => languagesCreateWithoutMove_damage_class_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_damage_class_proseInput)
    create!: languagesCreateWithoutMove_damage_class_proseInput;
}
