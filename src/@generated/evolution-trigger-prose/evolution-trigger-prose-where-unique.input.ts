import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseEvolution_trigger_idLocal_language_idCompoundUniqueInput } from './evolution-trigger-prose-evolution-trigger-id-local-language-id-compound-unique.input';

@InputType()
export class evolution_trigger_proseWhereUniqueInput {

    @Field(() => evolution_trigger_proseEvolution_trigger_idLocal_language_idCompoundUniqueInput, {nullable:true})
    evolution_trigger_id_local_language_id?: evolution_trigger_proseEvolution_trigger_idLocal_language_idCompoundUniqueInput;
}
