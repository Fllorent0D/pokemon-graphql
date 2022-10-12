import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_battle_style_proseInput } from './languages-create-without-move-battle-style-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_battle_style_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_battle_style_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_battle_style_proseInput)
    create!: languagesCreateWithoutMove_battle_style_proseInput;
}
