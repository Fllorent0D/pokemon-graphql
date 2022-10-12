import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseCreateWithoutLanguagesInput } from './encounter-method-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { encounter_method_proseCreateOrConnectWithoutLanguagesInput } from './encounter-method-prose-create-or-connect-without-languages.input';
import { encounter_method_proseWhereUniqueInput } from './encounter-method-prose-where-unique.input';

@InputType()
export class encounter_method_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [encounter_method_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_method_proseCreateWithoutLanguagesInput)
    create?: Array<encounter_method_proseCreateWithoutLanguagesInput>;

    @Field(() => [encounter_method_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_method_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<encounter_method_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [encounter_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_method_proseWhereUniqueInput)
    connect?: Array<encounter_method_proseWhereUniqueInput>;
}
