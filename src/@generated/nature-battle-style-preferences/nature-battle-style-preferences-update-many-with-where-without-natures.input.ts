import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesScalarWhereInput } from './nature-battle-style-preferences-scalar-where.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesUpdateManyMutationInput } from './nature-battle-style-preferences-update-many-mutation.input';

@InputType()
export class nature_battle_style_preferencesUpdateManyWithWhereWithoutNaturesInput {

    @Field(() => nature_battle_style_preferencesScalarWhereInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesScalarWhereInput)
    where!: nature_battle_style_preferencesScalarWhereInput;

    @Field(() => nature_battle_style_preferencesUpdateManyMutationInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesUpdateManyMutationInput)
    data!: nature_battle_style_preferencesUpdateManyMutationInput;
}
