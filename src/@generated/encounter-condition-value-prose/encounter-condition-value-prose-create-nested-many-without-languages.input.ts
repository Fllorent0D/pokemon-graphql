import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseCreateWithoutLanguagesInput } from './encounter-condition-value-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput } from './encounter-condition-value-prose-create-or-connect-without-languages.input';
import { encounter_condition_value_proseWhereUniqueInput } from './encounter-condition-value-prose-where-unique.input';

@InputType()
export class encounter_condition_value_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [encounter_condition_value_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateWithoutLanguagesInput)
    create?: Array<encounter_condition_value_proseCreateWithoutLanguagesInput>;

    @Field(() => [encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    connect?: Array<encounter_condition_value_proseWhereUniqueInput>;
}
