import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_proseUpdateWithoutAbilitiesInput } from './ability-prose-update-without-abilities.input';
import { ability_proseCreateWithoutAbilitiesInput } from './ability-prose-create-without-abilities.input';

@InputType()
export class ability_proseUpsertWithWhereUniqueWithoutAbilitiesInput {

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;

    @Field(() => ability_proseUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_proseUpdateWithoutAbilitiesInput)
    update!: ability_proseUpdateWithoutAbilitiesInput;

    @Field(() => ability_proseCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_proseCreateWithoutAbilitiesInput)
    create!: ability_proseCreateWithoutAbilitiesInput;
}
