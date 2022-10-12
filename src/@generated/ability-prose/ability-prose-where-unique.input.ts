import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseAbility_idLocal_language_idCompoundUniqueInput } from './ability-prose-ability-id-local-language-id-compound-unique.input';

@InputType()
export class ability_proseWhereUniqueInput {

    @Field(() => ability_proseAbility_idLocal_language_idCompoundUniqueInput, {nullable:true})
    ability_id_local_language_id?: ability_proseAbility_idLocal_language_idCompoundUniqueInput;
}
