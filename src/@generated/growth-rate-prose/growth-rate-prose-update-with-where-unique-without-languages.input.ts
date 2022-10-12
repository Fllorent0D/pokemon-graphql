import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseWhereUniqueInput } from './growth-rate-prose-where-unique.input';
import { Type } from 'class-transformer';
import { growth_rate_proseUpdateWithoutLanguagesInput } from './growth-rate-prose-update-without-languages.input';

@InputType()
export class growth_rate_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => growth_rate_proseWhereUniqueInput, {nullable:false})
    @Type(() => growth_rate_proseWhereUniqueInput)
    where!: growth_rate_proseWhereUniqueInput;

    @Field(() => growth_rate_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => growth_rate_proseUpdateWithoutLanguagesInput)
    data!: growth_rate_proseUpdateWithoutLanguagesInput;
}
