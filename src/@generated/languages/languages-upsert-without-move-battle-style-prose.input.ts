import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_battle_style_proseInput } from './languages-update-without-move-battle-style-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_battle_style_proseInput } from './languages-create-without-move-battle-style-prose.input';

@InputType()
export class languagesUpsertWithoutMove_battle_style_proseInput {

    @Field(() => languagesUpdateWithoutMove_battle_style_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_battle_style_proseInput)
    update!: languagesUpdateWithoutMove_battle_style_proseInput;

    @Field(() => languagesCreateWithoutMove_battle_style_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_battle_style_proseInput)
    create!: languagesCreateWithoutMove_battle_style_proseInput;
}
