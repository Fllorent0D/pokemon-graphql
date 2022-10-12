import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseCreateWithoutLanguagesInput } from './contest-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { contest_effect_proseCreateOrConnectWithoutLanguagesInput } from './contest-effect-prose-create-or-connect-without-languages.input';
import { contest_effect_proseWhereUniqueInput } from './contest-effect-prose-where-unique.input';

@InputType()
export class contest_effect_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [contest_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_effect_proseCreateWithoutLanguagesInput)
    create?: Array<contest_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [contest_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<contest_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    connect?: Array<contest_effect_proseWhereUniqueInput>;
}
