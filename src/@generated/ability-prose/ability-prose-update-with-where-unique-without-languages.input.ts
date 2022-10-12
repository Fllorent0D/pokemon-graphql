import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_proseUpdateWithoutLanguagesInput } from './ability-prose-update-without-languages.input';

@InputType()
export class ability_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;

    @Field(() => ability_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_proseUpdateWithoutLanguagesInput)
    data!: ability_proseUpdateWithoutLanguagesInput;
}
