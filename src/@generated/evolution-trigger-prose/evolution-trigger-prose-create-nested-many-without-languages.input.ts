import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseCreateWithoutLanguagesInput } from './evolution-trigger-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseCreateOrConnectWithoutLanguagesInput } from './evolution-trigger-prose-create-or-connect-without-languages.input';
import { evolution_trigger_proseWhereUniqueInput } from './evolution-trigger-prose-where-unique.input';

@InputType()
export class evolution_trigger_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [evolution_trigger_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateWithoutLanguagesInput)
    create?: Array<evolution_trigger_proseCreateWithoutLanguagesInput>;

    @Field(() => [evolution_trigger_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<evolution_trigger_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    connect?: Array<evolution_trigger_proseWhereUniqueInput>;
}
