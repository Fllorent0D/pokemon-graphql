import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_battle_style_proseInput } from './languages-create-without-move-battle-style-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_battle_style_proseInput } from './languages-create-or-connect-without-move-battle-style-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_battle_style_proseInput {

    @Field(() => languagesCreateWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_battle_style_proseInput)
    create?: languagesCreateWithoutMove_battle_style_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_battle_style_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_battle_style_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
