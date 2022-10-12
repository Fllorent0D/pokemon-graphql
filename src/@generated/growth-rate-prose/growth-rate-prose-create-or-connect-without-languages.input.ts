import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseWhereUniqueInput } from './growth-rate-prose-where-unique.input';
import { Type } from 'class-transformer';
import { growth_rate_proseCreateWithoutLanguagesInput } from './growth-rate-prose-create-without-languages.input';

@InputType()
export class growth_rate_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => growth_rate_proseWhereUniqueInput, {nullable:false})
    @Type(() => growth_rate_proseWhereUniqueInput)
    where!: growth_rate_proseWhereUniqueInput;

    @Field(() => growth_rate_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => growth_rate_proseCreateWithoutLanguagesInput)
    create!: growth_rate_proseCreateWithoutLanguagesInput;
}
