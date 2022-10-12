import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_proseUpdateWithoutLanguagesInput } from './ability-prose-update-without-languages.input';
import { ability_proseCreateWithoutLanguagesInput } from './ability-prose-create-without-languages.input';

@InputType()
export class ability_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;

    @Field(() => ability_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_proseUpdateWithoutLanguagesInput)
    update!: ability_proseUpdateWithoutLanguagesInput;

    @Field(() => ability_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_proseCreateWithoutLanguagesInput)
    create!: ability_proseCreateWithoutLanguagesInput;
}
