import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseCreateWithoutLanguagesInput } from './growth-rate-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { growth_rate_proseCreateOrConnectWithoutLanguagesInput } from './growth-rate-prose-create-or-connect-without-languages.input';
import { growth_rate_proseWhereUniqueInput } from './growth-rate-prose-where-unique.input';

@InputType()
export class growth_rate_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [growth_rate_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateWithoutLanguagesInput)
    create?: Array<growth_rate_proseCreateWithoutLanguagesInput>;

    @Field(() => [growth_rate_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<growth_rate_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    connect?: Array<growth_rate_proseWhereUniqueInput>;
}
